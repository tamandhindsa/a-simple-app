import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { Spin } from "antd";

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
