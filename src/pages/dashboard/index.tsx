import React from "react";
import "./index.less";
import { Layout } from "@/components/layout";
import { FishSideBar } from "@/biz-components/sidebar";
import {
  Route,
  BrowserRouter,
  Switch,
} from "react-router-dom";
import { PageDefault } from "./content/page-default";
import { PageButton } from "./content/page-button";

export const Dashboard: React.FC = () => {
  return (
    <Layout sidebar={<FishSideBar />}>
      <div className="fishDesign-content">
        <BrowserRouter>
          <Switch>
            <Route
              path="/components/button"
              exact
              component={PageButton}
            />
            <Route
              path="/components"
              component={PageDefault}
            />
          </Switch>
        </BrowserRouter>
      </div>
    </Layout>
  );
};
