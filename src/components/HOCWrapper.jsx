import React from "react";

const HOCWrapper = (WrappedComponent) => {
  return function EnhancedComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...props} />;
  };
};

export default HOCWrapper;
