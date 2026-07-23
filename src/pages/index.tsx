import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/guide/basics">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Documentation for Windows 93 V3">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className={clsx('col col--4')}>
                <Heading as="h3">Guide</Heading>
                <p>
                  Learn the basics of creating apps for Windows 93, including folder structure and the Plan UI system.
                </p>
                <Link to="/docs/guide/basics">Read the guide</Link>
              </div>
              <div className={clsx('col col--4')}>
                <Heading as="h3">Components</Heading>
                <p>
                  Explore UI components like dialogs, explorers, toasts, and more that you can use in your apps.
                </p>
                <Link to="/docs/components/dialog">Browse components</Link>
              </div>
              <div className={clsx('col col--4')}>
                <Heading as="h3">Internals</Heading>
                <p>
                  Dive into the boot process, filesystem, and exec system.
                </p>
                <Link to="/docs/internals/boot">Learn more</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
