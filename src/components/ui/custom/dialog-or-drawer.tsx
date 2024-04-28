/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "~/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTrigger,
} from "~/components/ui/drawer";
import { useMediaQuery } from "~/lib/hooks/use-media-query";

const DialogOrDrawer: React.FC<any> = (props) => {
  const { isMobile, isTablet } = useMediaQuery();
  return isMobile || isTablet ? <Drawer {...props} /> : <Dialog {...props} />;
};

const DialogOrDrawerContent: React.FC<any> = (props) => {
  const { isMobile, isTablet } = useMediaQuery();
  return isMobile || isTablet ? (
    <DrawerContent {...props} />
  ) : (
    <DialogContent {...props} />
  );
};

const DialogOrDrawerDescription: React.FC<any> = (props) => {
  const { isMobile, isTablet } = useMediaQuery();

  return isMobile || isTablet ? (
    <DrawerDescription {...props} />
  ) : (
    <DialogDescription {...props} />
  );
};

const DialogOrDrawerHeader: React.FC<any> = (props) => {
  const { isMobile, isTablet } = useMediaQuery();
  return isMobile || isTablet ? (
    <DrawerHeader {...props} />
  ) : (
    <DialogHeader {...props} />
  );
};

const DialogOrDrawerTrigger: React.FC<any> = (props) => {
  const { isMobile, isTablet } = useMediaQuery();
  return isMobile || isTablet ? (
    <DrawerTrigger {...props} />
  ) : (
    <DialogTrigger {...props} />
  );
};

export {
  DialogOrDrawer,
  DialogOrDrawerContent,
  DialogOrDrawerDescription,
  DialogOrDrawerHeader,
  DialogOrDrawerTrigger,
};
