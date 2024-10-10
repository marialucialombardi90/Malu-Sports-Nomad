// import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded';
import { ReactComponent as devie } from 'src/assets/devie.svg';
import { ReactComponent as DealerManagement } from 'src/assets/DealerManagement.svg';
import { ReactComponent as usermanagment } from 'src/assets/usermanagment.svg';
// import { ReactComponent as warranty } from 'src/assets/warranty.svg';
import { ReactComponent as Technical } from 'src/assets/Technical.svg';
import { ReactComponent as settings } from 'src/assets/settings.svg';
import { uniqueId } from 'lodash';

const Menuitems = [
  // {
  //   id: uniqueId(),
  //   title: 'Dashboard',
  //   icon: SpeedRoundedIcon,
  //   href: '/dashboard',
  //   hasBorder: true,
  // },
  {
    id: uniqueId(),
    title: 'Users',
    icon: usermanagment,
    href: '/users',
  },
  {
    id: uniqueId(),
    title: 'Facilities',
    icon: devie,
    href: '/facilities',
  },
  {
    id: uniqueId(),
    title: 'Bookings',
    icon: DealerManagement,
    href: '/bookings',
  },
  // {
  //   id: uniqueId(),
  //   title: 'Terms & Conditions',
  //   icon: warranty,
  //   href: '/terms-conditions',
  // },
  {
    id: uniqueId(),
    title: 'Exercises',
    icon: Technical,
    href: '/exercises',
  },
  {
    id: uniqueId(),
    title: 'Queries',
    icon: settings,
    href: '/queries',
  },
];

export default Menuitems;
