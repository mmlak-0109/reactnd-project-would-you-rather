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

export function formatQuestion(question, user) {
  const { id, optionOne, optionTwo} = question;
  const { name, avatarURL } = user;

  return {
    id,
    name,
    avatar: avatarURL,
    title: 'Would you rather...',
    optionOneText: optionOne['text'],
    optionTwoText: optionTwo['text']
  }
}

export function formatResults(question, user) {
  const { id, optionOne, optionTwo} = question;
  const { name, avatarURL } = user;

  return {
    id,
    name,
    avatar: avatarURL,
    title: 'Would you rather',
    optionOneText: optionOne['text'],
    optionTwoText: optionTwo['text'],
    optionOneVotes: optionOne['votes'],
    optionTwoVotes: optionTwo['votes']
  }
}