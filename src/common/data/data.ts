
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export default [
  {
    id: generateUUID(),
    background: '#213DD3',
    text: 'slide1',
    url: 'https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
  },
  {
    id: generateUUID(),
    background: '#7ED321',
    text: 'slide2',
    url: 'https://images.unsplash.com/photo-1490823670292-6699d9edbb7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80'
  },
  {
    id: generateUUID(),
    background: '#D32160',
    text: 'slide3',
    url: 'https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
  },
  {
    id: generateUUID(),
    background: '#D36021',
    text: 'slide4',
    url: 'https://images.unsplash.com/photo-1490823670292-6699d9edbb7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=933&q=80'
  },
  {
    id: generateUUID(),
    background: '#50E3C2',
    text: 'slide5',
    url: 'https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
  }
]
