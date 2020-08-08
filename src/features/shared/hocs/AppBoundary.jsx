import React, { useEffect } from "react";
import { Spin } from "antd";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";

const AppBoundary = ({ children, isLoading }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const spinnerStyle = {
    maxHeight: "100vh",
    position: "fixed",
  };

  return (
    <Spin size="large" style={spinnerStyle} spinning={isLoading}>
      {children}
    </Spin>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.common.globalLoading,
});

export default connect(mapStateToProps)(AppBoundary);
