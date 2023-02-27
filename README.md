# Embers

Embers is an opinionated design system framework for designing and developing digital products.

Copyright and license
Code and documentation copyright 2021 Ourfires LTD. Code released under the MIT License. Docs released under Creative Commons.

We use Storybook.

Run the test runner (Jest) in a terminal:
`yarn test --watchAll`

Start the component explorer on port 9009:
`yarn storybook`

Run the frontend app proper on port 3000:
`yarn start`

We use a component driven development:
https://blog.hichroma.com/component-driven-development-ce1109d56c8e

We use the Storyshots addon [https://github.com/storybookjs/storybook/tree/master/addons/storyshots] to automatically create snapshot of each story.
Storyshot is initiated in `storybook.test.js`

We use that in conjuction to Jest.
So as we do Component.stories.js for Storybook (and Storyshots), we create Component.test.js tu use Jest for unit testing.
