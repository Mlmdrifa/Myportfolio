import Link from "next/link";
import { ReactElement } from "react";
import { FaCcStripe } from "react-icons/fa";
import { LuSquareDashedBottom } from "react-icons/lu";
import { SiExpo, SiZod } from "react-icons/si";
import { TbBrandReactNative, TbBrandRedux } from "react-icons/tb";
import { VscPreview } from "react-icons/vsc";

export type StackProps = {
  Logo: ReactElement;
  title: string;
  url: URL;
};

export const STACKS: StackProps[] = [
  {
    Logo: <SiExpo />,
    title: "Expo sdk-50",
    url: new URL("https://blog.expo.dev/expo-sdk-50-afb524038906"),
  },
  {
    Logo: <TbBrandReactNative />,
    title: " React Navigation v6",
    url: new URL(
      "https://reactnavigation.org/blog/2021/08/14/react-navigation-6.0/"
    ),
  },
  {
    Logo: <TbBrandReactNative />,
    title: "React Native Firebase",
    url: new URL("https://rnfirebase.io/"),
  },
  {
    Logo: <TbBrandReactNative />,
    title: "React Native Calendar",
    url: new URL("https://www.npmjs.com/package/react-native-calendar-picker"),
  },
  {
    Logo: <TbBrandReactNative />,
    title: "React Native Reanimated",
    url: new URL("https://docs.swmansion.com/react-native-reanimated/"),
  },
  {
    Logo: <TbBrandReactNative />,
    title: "React Native Google Signin",
    url: new URL("https://react-native-google-signin.github.io/docs/install"),
  },
  {
    Logo: <TbBrandReactNative />,
    title: "React i18next",
    url: new URL("https://react.i18next.com/"),
  },
  {
    Logo: <SiZod />,
    title: "Formulaire Zod",
    url: new URL("https://zod.dev/"),
  },
  {
    Logo: <VscPreview />,
    title: "Formik",
    url: new URL("https://formik.org/"),
  },
  {
    Logo: <FaCcStripe />,
    title: " Stripe",
    url: new URL("https://docs.stripe.com/stripe-js/react"),
  },
  {
    Logo: <LuSquareDashedBottom />,
    title: "BottomSheetModal",
    url: new URL("https://ui.gorhom.dev/components/bottom-sheet/modal/usage/"),
  },
  {
    Logo: <TbBrandRedux />,
    title: "Reduxjs/toolkit",
    url: new URL("https://redux-toolkit.js.org/"),
  },
];

export const Stack = (props: StackProps) => {
  const { title, Logo, url } = props;
  const urlAsString = url.toString();
  return (
    <Link
      href={urlAsString}
      passHref
      className="block hover:bg-accent/90 transition-colors rounded"
    >
      <div className="flex items-center gap-1">
        <span className="bg-accent text-accent-foreground p-2 rounded-sm">
          {Logo}
        </span>
        <p className="text-sm font-semibold ">{title}</p>
      </div>
    </Link>
  );
};
