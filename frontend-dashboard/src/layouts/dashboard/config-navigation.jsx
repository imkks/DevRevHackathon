import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Customers',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Purchase CustomerEcho Insights',
    path: '/404',
    icon: icon('ic_cart'),
  },
  {
    title: 'Tickets using Snap In',
    path: '/404',
    icon: icon('ic_disabled'),
  },

  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'About Team',
    path: '/blog',
    icon: icon('ic_blog'),
  },
];

export default navConfig;
