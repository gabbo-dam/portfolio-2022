import type { NextPage } from 'next';
// import { DesktopNav, MobileNav } from '@components/nav';
// import Footer from '@components/footer';

type LayoutProps = {
  children: any;
};

const Layout: NextPage<LayoutProps> = ({ children }) => {
  return (
    <div className="flex  my-8 flex-col">
      {/* <DesktopNav /> */}
      <div className="h-full max-w-screen-xl w-4/5 mx-auto ">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
