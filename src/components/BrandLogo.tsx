import { Link } from 'react-router-dom';
import optionBSymbol from '../assets/si-tutor-option-b-symbol.svg';

interface BrandLogoProps {
  inverse?: boolean;
  compact?: boolean;
}

export default function BrandLogo({ inverse = false, compact = false }: BrandLogoProps) {
  return (
    <Link
      className={`brand ${inverse ? 'brand--inverse' : ''} ${compact ? 'brand--compact' : ''}`}
      to="/"
      aria-label="Si Tutor home"
    >
      <span className="brand__mark" aria-hidden="true">
        <img
          className="brand__mark-image"
          src={optionBSymbol}
          alt=""
          draggable={false}
          decoding="async"
        />
      </span>
      <span className="brand__wordmark" aria-hidden="true">
        situtor<span className="brand__wordmark-dot">.</span>
      </span>
    </Link>
  );
}
