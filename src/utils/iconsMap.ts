import IconGitHub from '@/components/shared/icons/SvgGitHub';
import IconJavaScript from '@/components/shared/icons/SvgJavascript';
import IconMongoose from '@/components/shared/icons/SvgIconMongoose';
import IconNodeJs from '@/components/shared/icons/SvgNodeJs';
import IconReact from '@/components/shared/icons/SvgReact';
import IconScSS from '@/components/shared/icons/SvgScss';
import StyledComponents from '@/components/shared/icons/SvgStyledComponents';
import IconTypeScript from '@/components/shared/icons/SvgTypeScript';
import { JSX } from 'react';
import IconMongoDb from '@/components/shared/icons/SvgMongoDb';
import IconHtml from '@/components/shared/icons/SvgHtml';
import IconCss from '@/components/shared/icons/SvgCss';
import IconVercel from '@/components/shared/icons/SvgVercel';
import IconRender from '@/components/shared/icons/SvgRender';
import IconFigma from '@/components/shared/icons/SvgFigma';
import IconPhotoshop from '@/components/shared/icons/SvgPhotoshop';
import IconIllustrator from '@/components/shared/icons/SvgIllustrator';
import IconAfterEffects from '@/components/shared/icons/SvgAfterEffects';
import IconFotografia from '@/components/shared/icons/SvgFotografia';

export const iconsMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  // principal
  typeScript: IconTypeScript,
  styledComponents: StyledComponents,
  nodeJs: IconNodeJs,
  react: IconReact,
  scss: IconScSS,
  gitHub: IconGitHub,

  // fundamentos
  html: IconHtml,
  css: IconCss,
  javascript: IconJavaScript,

  // dados
  mongoose: IconMongoose,
  mongoDb: IconMongoDb,

  // deploy
  vercel: IconVercel,
  render: IconRender,

  // design ui
  figma: IconFigma,
  photoshop: IconPhotoshop,
  illustrator: IconIllustrator,
  aftereffects: IconAfterEffects,
  fotografia: IconFotografia
};
