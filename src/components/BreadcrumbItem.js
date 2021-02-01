import { Breadcrumb } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const BreadcrumbItem = ({ breadcrumbs }) => {
  return (
    <Breadcrumb className='bg-transparent mt-3'>
      <Breadcrumb.Item linkAs={NavLink} linkProps={{ to: '/' }}>
        Home
      </Breadcrumb.Item>
      {breadcrumbs.map((crumb, index, arr) => {
        const link = `/${arr.slice(0, index + 1).join('/')}`;
        if (index < arr.length - 1) {
          return (
            <Breadcrumb.Item
              linkAs={NavLink}
              linkProps={{ to: link }}
              key={crumb}
            >
              {crumb}
            </Breadcrumb.Item>
          );
        } else {
          return (
            <Breadcrumb.Item active className='text-white' key={crumb}>
              {crumb}
            </Breadcrumb.Item>
          );
        }
      })}
    </Breadcrumb>
  );
};

export default BreadcrumbItem;
