import { ApplicationType } from '@logto/schemas';

import { type GuideMetadata } from '../types';

const metadata: Readonly<GuideMetadata> = Object.freeze({
  name: 'Android (Java)',
  description: 'Android integration for Java.',
  target: ApplicationType.Native,
  sample: {
    repo: 'kotlin',
    path: 'android-sample-java',
  },
});

export default metadata;
