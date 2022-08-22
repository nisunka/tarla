import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={384}
    viewBox="0 0 280 384"
    backgroundColor="#FFF5ED"
    foregroundColor="var(--main-bg)">
    <rect x="0" y="0" rx="25" ry="25" width="280" height="280" />
    <rect x="0" y="290" rx="10" ry="10" width="280" height="18" />
    <rect x="0" y="314" rx="10" ry="10" width="140" height="16" />
    <rect x="0" y="337" rx="24" ry="24" width="138" height="44" />
  </ContentLoader>
);

export default Skeleton;
