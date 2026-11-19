import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authApiBaseUrl, authApiUrl } from '../lib/authApi';

export type StudentProfile = {
  id: string;
  fullName: string;
  email: string;
  emailVerified: boolean;
  createdAt?: string;
};

type AuthStatus = 'loading' | 'authenticated' | 'unauthenticated' | 'error';

type AuthContextValue = {
  student: StudentProfile | null;
  status: AuthStatus;
  refresh: () => Promise<StudentProfile | null>;
  updateStudent: (profile: StudentProfile) => void;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

type AuthProviderProps = { children: ReactNode };

export function AuthProvider({ children }: AuthProviderProps) {
  const [student, setStudent] = useState<StudentProfile | null>(null);
  const [status, setStatus] = useState<AuthStatus>('loading');

  const refresh = useCallback(async () => {
    if (!authApiBaseUrl) {
      setStudent(null);
      setStatus('unauthenticated');
      return null;
    }

    setStatus('loading');
    try {
      const response = await fetch(authApiUrl('/auth/me'), {
        credentials: 'include',
        cache: 'no-store',
      });

      if (response.status === 401) {
        setStudent(null);
        setStatus('unauthenticated');
        return null;
      }

      if (!response.ok) {
        throw new Error('We could not verify your Si Tutor session.');
      }

      const payload = await response.json() as { student?: StudentProfile };
      if (!payload.student?.id) {
        setStudent(null);
        setStatus('unauthenticated');
        return null;
      }

      setStudent(payload.student);
      setStatus('authenticated');
      return payload.student;
    } catch (error) {
      setStudent(null);
      setStatus('error');
      throw error;
    }
  }, []);

  const updateStudent = useCallback((profile: StudentProfile) => {
    setStudent(profile);
    setStatus('authenticated');
  }, []);

  const signOut = useCallback(async () => {
    if (!authApiBaseUrl) throw new Error('The Si Tutor account service is not configured.');

    const response = await fetch(authApiUrl('/auth/logout'), {
      method: 'POST',
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('We could not end your session. Please try again.');
    }

    setStudent(null);
    setStatus('unauthenticated');
  }, []);

  useEffect(() => {
    refresh().catch(() => {
      // The provider exposes an error state so protected pages can offer a retry.
    });
  }, [refresh]);

  const value = useMemo(() => ({ student, status, refresh, updateStudent, signOut }), [student, status, refresh, updateStudent, signOut]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside AuthProvider.');
  return context;
}

export function RequireStudent({ children }: { children: ReactNode }) {
  const { student, status, refresh } = useAuth();
  const location = useLocation();

  if (status === 'loading') {
    return (
      <main className="student-auth-state" aria-live="polite">
        <span className="student-auth-state__spinner" aria-hidden="true" />
        <h1>Checking your account</h1>
        <p>We're confirming your Si Tutor session.</p>
      </main>
    );
  }

  if (status === 'error') {
    return (
      <main className="student-auth-state" role="alert">
        <h1>We couldn't check your session</h1>
        <p>Check your connection to Si Tutor, then try again.</p>
        <button className="button button--primary" type="button" onClick={() => refresh().catch(() => {})}>Try again</button>
      </main>
    );
  }

  if (!student) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return <>{children}</>;
}
