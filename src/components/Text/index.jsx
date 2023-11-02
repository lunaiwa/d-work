import React from "react";

const sizeClasses = {
  txtAlteHaasGrotesk300: "font-altehaasgrotesk font-normal",
  txtAlteHaasGroteskBold300: "font-altehaasgrotesk font-bold",
  txtAlteHaasGroteskBold90: "font-altehaasgrotesk font-bold",
  txtAlteHaasGrotesk25: "font-altehaasgrotesk font-normal",
  txtAlteHaasGroteskBold30: "font-altehaasgrotesk font-bold",
  txtAlteHaasGroteskBold20: "font-altehaasgrotesk font-bold",
  txtAlteHaasGrotesk20: "font-altehaasgrotesk font-normal",
  txtAlteHaasGroteskBold25: "font-altehaasgrotesk font-bold",
  txtAlteHaasGroteskBold200: "font-altehaasgrotesk font-bold",
  txtAlteHaasGroteskBold320: "font-altehaasgrotesk font-bold",
  txtAlteHaasGroteskBold100: "font-altehaasgrotesk font-bold",
  txtSourceSansProRegular20: "font-normal font-sourcesanspro",
  txtAlteHaasGroteskBold90Black900: "font-altehaasgrotesk font-bold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
