export const avatarApiData = [
  {
    id: 1,
    propsName: 'alt',
    propsType: 'string',
    propsDescription: 'Alternative text for the avatar image.',
    default: 'avatar',
  },
  {
    id: 2,
    propsName: 'bordered',
    propsType: 'boolean',
    propsDescription: 'Determines if the avatar has a border.',
    default: 'false',
  },
  {
    id: 3,
    propsName: 'img',
    propsType: 'string',
    propsDescription: "Path to the user's image",
    default: '/avatar.png',
  },
  {
    id: 4,
    propsName: 'size',
    propsType: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    propsDescription: 'Specifies the size of the avatar',
    default: 'md',
  },
  {
    id: 5,
    propsName: 'shape',
    propsType: ['circle', 'rounded', 'square'],
    propsDescription: 'The shape of the avatar.',
    default: 'square',
  },
  {
    id: 6,
    propsName: 'stacked',
    propsType: 'boolean',
    propsDescription: 'Specifies if avatars should be stacked together.',
    default: 'false',
  },
  {
    id: 8,
    propsName: 'status',
    propsType: ['away', 'busy', 'offline', 'online'],
    propsDescription: "Reflects the user's availability status.",
    default: 'None',
  },
  {
    id: 9,
    propsName: 'statusType',
    propsType: ['dot', 'notification'],
    propsDescription: 'Specifies the type of status',
    default: 'None',
  },
  {
    id: 10,
    propsName: 'statusPosition',
    propsType: ['bottom-left', 'bottom-right', 'top-left', 'top-right'],
    propsDescription: 'Specifies the position of the status indicator.',
    default: 'bottom-right',
  },
  {
    id: 11,
    propsName: 'totalNotification',
    propsType: 'number',
    propsDescription: 'Total number of notifications',
    default: '99',
  },
  {
    id: 12,
    propsName: 'className',
    propsType: 'string',
    propsDescription: 'Injects the class name in avatar',
    default: 'None',
  },
  {
    id: 13,
    propsName: 'statusStyle',
    propsType: 'string',
    propsDescription: 'Injects the class name in avatar status',
    default: 'None',
  },
]
