import React from 'react';

import genData from 'utils/prepareData';

import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';

import { Line } from 'react-chartjs-2';

import Page from 'components/Page';

const ChartPage = () => {
  return (
    <Page title="Charts" breadcrumbs={[{ name: 'Charts', active: true }]}>
      <Row>
        <Col xl={6} lg={12} md={12}>
          <Card>
            <CardHeader>Line</CardHeader>
            <CardBody>
              <Line data={genData({ fill: false }, { fill: false })} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default ChartPage;
