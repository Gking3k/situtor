# Analytics event plan

Proposed provider: Umami Cloud. No analytics script is connected in the current checkpoint.

## Aggregate product events
| Event | Trigger | Allowed properties |
|---|---|---|
| `lesson_open` | Learner opens a lesson | `lesson_slug`, `subject`, `class_level` |
| `quiz_start` | Learner starts a topic quiz | `lesson_slug`, `question_count` |
| `quiz_complete` | Learner submits a quiz | `lesson_slug`, `question_count`, `score_band` |
| `faq_expand` | Learner expands an FAQ | `faq_category`, `faq_key` |
| `feedback_start` | Feedback form is opened | `feedback_category` |
| `feedback_submit` | Feedback is accepted by the server | `feedback_category` |

## Privacy rules
- Do not send names, email addresses, free-text feedback, exact quiz answers, credentials or payment details to analytics.
- Do not claim unique visitors are verified individual students; analytics visitors are estimates.
- Publish a reviewed privacy notice before enabling analytics.
- Review the selected provider's current privacy, retention and regional processing terms before launch.
- Use a server-side event only when the form submission is actually accepted; do not count a button click as a successful submission.
