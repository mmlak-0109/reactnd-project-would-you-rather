export function formatQuestionPreview(question, user) {
  const { id, optionOne } = question;
  const { name, avatarURL } = user;

  return {
    id,
    name,
    avatar: avatarURL,
    title: 'Would you rather...',
    text: optionOne['text']
  }
}