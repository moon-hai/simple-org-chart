import { v4 as uuidv4 } from 'uuid';

export default [
  {
    id: uuidv4(),
    name: 'CEO Department',
    description: 'CEO Department',
    membersCount: 1,
    members: [
      {
        id: uuidv4(),
        name: 'Akatsuki'
      }
    ],
    childrens: [
      {
        id: uuidv4(),
        name: 'HR Department',
        description: 'HR Department',
        membersCount: 2,
        members: [
          {
            id: uuidv4(),
            name: 'Uchia Itachi'
          },
          {
            id: uuidv4(),
            name: 'Uchia Sasuke'
          }
        ],
        childrens: null
      },
      {
        id: uuidv4(),
        name: 'IT Department',
        description: 'IT Department',
        membersCount: 0,
        members: null,
        childrens: [
          {
            id: uuidv4(),
            name: 'BE Department',
            description: 'BE Department',
            membersCount: 1,
            members: [
              {
                id: uuidv4(),
                name: 'Naruto'
              }
            ],
            childrens: null
          },
          {
            id: uuidv4(),
            name: 'FE Department',
            description: 'FE Department',
            membersCount: 3,
            members: [
              {
                id: uuidv4(),
                name: 'Kakashi'
              },
              {
                id: uuidv4(),
                name: 'Tsunade'
              },
              {
                id: uuidv4(),
                name: 'Sakura'
              }
            ],
            childrens: null
          },
          {
            id: uuidv4(),
            name: 'Mobile Department',
            description: 'Mobile Department',
            membersCount: 0,
            members: null,
            childrens: null
          },
          {
            id: uuidv4(),
            name: 'QA/QC Department',
            description: 'QA/QC Department',
            membersCount: 1,
            members: [
              {
                id: uuidv4(),
                name: 'Pain'
              }
            ],
            childrens: null
          }
        ]
      },
      {
        id: uuidv4(),
        name: 'Marketing Department',
        description: 'Marketing Department',
        membersCount: 2,
        members: [
          {
            id: uuidv4(),
            name: 'Boruto'
          },
          {
            id: uuidv4(),
            name: 'Shino'
          }
        ],
        childrens: [
          {
            id: uuidv4(),
            name: 'Online Marketing Department',
            description: 'Online Marketing',
            membersCount: 1,
            members: [
              {
                id: uuidv4(),
                name: 'Rock Lee'
              }
            ],
            childrens: null
          },
          {
            id: uuidv4(),
            name: 'Mail Marketing Department',
            description: 'Mail Marketing',
            membersCount: 0,
            members: null,
            childrens: null
          },
        ]
      },
      {
        id: uuidv4(),
        name: 'Finance Department',
        description: 'Finance Department',
        membersCount: 1,
        members: [
          {
            id: uuidv4(),
            name: 'Hinata'
          }
        ],
        childrens: null
      }
    ]
  }
]
