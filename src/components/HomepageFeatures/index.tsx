import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Getting Started',
    Svg: require('@site/static/img/app-getting-started3.svg').default,
    link: '/docs/category/tutorial---basics',
    description: (
      <>
        New to TailorMate? Start here. This section walks you through initial setup, dashboard overview, and how to begin managing your tailoring business smoothly.
      </>
    ),
  },
  {
    title: 'Watch Tutorial Videos',
    Svg: require('@site/static/img/app-tutorial-videos.svg').default,
    description: (
      <>
       Explore step-by-step video tutorials designed to help you understand and use TailorMate more effectively.
      </>
    ),
  },
  {
    title: 'Search Knowldgebase',
    Svg: require('@site/static/img/app-tutorial-search.svg').default,
    description: (
      <>
        Quickly find answers, guides, and solutions by searching our complete TailorMate knowledgebase with a keyword.
      </>
    ),
  },
];

function Feature({title, Svg, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3"><Link to={link} style={{ textDecoration: 'none' }}>{title} </Link></Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
