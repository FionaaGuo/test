import type { UserConfig } from '@commitlint/types';

const scope = [
  '[需求]',
  '[修复]',
  '[重构]',
  '[优化]',
  '[单元测试]',
  '[提测]',
  '[上线]',
  '[文档]',
  '[注释]',
  '[添加]',
  '[删除]',
  '[其他]',
  'Merge',
  'Accept',
  'Revert',
];

const config: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  // formatter: '@commitlint/format',
  rules: {
    // egex: ((^[\[](需求|修复|重构|优化|单元测试|提测|上线|文档|注释|添加|删除|其他)[\]].{0,}[#0-9]{0,}.{0,})|(^Merge)|(^Accept)|(^Revert))(.+)
    'type-enum': [2, 'always', scope],
  },
  plugins: [
    {
      rules: {
        'custom-error-message': ({ type }) => {
          if (!type) {
            return [false, 'type 不能为空'];
          }
          return [
            false,
            `commit message 格式不正确，请使用 ${scope.join(' | ')} 开头`,
          ];
        },
      },
    },
  ],
};

export default config;
