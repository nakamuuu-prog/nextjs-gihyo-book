// next/imageはstorybook上で動作しないらしい
// 通常の画像と差し替える説明があるが、storybookの最新版と実装の仕方が違う
// バージョンが上がっていることで改善されている可能性もあるので一旦スルーする
import type { Preview } from '@storybook/react';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    acttions: { argTypeRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
