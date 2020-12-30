import React, { useState } from 'react';
import { Row, Col, Typography, Avatar, Space } from 'antd';
import BusinessLogo from '../../assets/business.svg';
import {
  BehanceSquareFilled,
  GithubFilled,
  LinkedinFilled,
  TabletFilled,
} from '@ant-design/icons';
import theme from '../../theme/theme';

const Business: React.FC = () => {
  const [contributors] = useState([
    {
      name: 'Vitor Delfino',
      image:
        'https://avatars3.githubusercontent.com/u/19233898?s=460&u=b8727e4feaedbd30d92e723a5e67bdd7327f13bf&v=4',
      job: 'Software Engineer',
      linkedin: 'https://www.linkedin.com/in/vitor-delfino/',
      hasPortfolio: true,
      behance: false,
      github: 'https://github.com/vitordelfino',
      blog: 'https://www.vitordelfino.dev/',
    },
    {
      name: 'Felipe Austríaco',
      image:
        'https://media.discordapp.net/attachments/723249940423507998/793934039186276352/dev.jpeg',
      job: 'Software Engineer',
      linkedin: 'https://www.linkedin.com/in/felipe-austriaco-dev/',
      github: 'https://github.com/w1redl4in',
      hasPortfolio: true,
      blog: 'https://www.felipeaustriaco.dev/',
      behance: false,
    },
    {
      name: 'Lucas Leão',
      image:
        'https://www.learning.uclg.org/sites/default/files/styles/featured_home_left/public/no-user-image-square.jpg?itok=PANMBJF-',
      job: 'Software Engineer',
      linkedin: 'https://www.linkedin.com/in/lucas-l-866959196/',
      github: 'https://github.com/lucasleaosobral',
      hasPortfolio: false,
      blog: '',
      behance: false,
    },
    {
      name: 'Vinicius Santos',
      image:
        'https://cdn.discordapp.com/attachments/333739802501316609/793937625174114354/estag.jpeg',
      job: 'Software Engineer',
      linkedin: 'https://www.linkedin.com/in/vinicius-santos-024774184/',
      hasPortfolio: false,
      behance: false,
      github: 'https://github.com/vinebks',
      blog: '',
    },
    {
      name: 'Vinicius Souza',
      image:
        'https://cdn.discordapp.com/attachments/421799034169196584/793953102461141002/1609355448750.png',
      job: 'Software Engineer',
      linkedin: 'https://www.linkedin.com/in/viniciussouza23/',
      github: 'https://github.com/ZeroBulletiss',
      blog: '',
      hasPortfolio: false,
      behance: false,
    },
    {
      name: 'Nestor Macedo',
      image:
        'https://scontent.fcgh37-1.fna.fbcdn.net/v/t1.0-9/13062522_991207087634791_8907310970568840404_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=QSMTFwOAhwEAX8l56sO&_nc_ht=scontent.fcgh37-1.fna&oh=f560cf2e8ce0613ef1447d41dbed3afc&oe=60071347',
      job: 'UX / UI - Designer',
      linkedin: '',
      github: '',
      blog: '',
      behance: true,
      hasPortfolio: false,
    },
  ]);

  return (
    <Row justify="center" align="middle" style={{ padding: '0 3rem' }}>
      <Col xxl={12} xl={12} lg={12}>
        <Row justify="center" className="business-svg">
          <img src={BusinessLogo} alt="" width="600px" />
        </Row>
      </Col>
      <Col xxl={12} xl={12} lg={12}>
        <Row justify="center">
          <Col>
            <Typography.Title level={1} style={theme.gradientText}>
              Wanna be in touch or just get to know who made this?
            </Typography.Title>
            {contributors.map((contributor) => (
              <Row
                style={{ margin: '1rem' }}
                align="middle"
                key={contributor.name}
              >
                <Col span={12}>
                  <Row align="middle" justify="space-between">
                    <Avatar src={contributor.image} size={64} />
                    <Typography.Text strong>
                      {contributor.name}
                    </Typography.Text>{' '}
                    -<Typography.Text strong>{contributor.job}</Typography.Text>{' '}
                    -
                  </Row>
                </Col>
                <Col span={12}>
                  <Row
                    align="middle"
                    justify="start"
                    style={{ paddingLeft: '1rem' }}
                  >
                    <Space>
                      <a
                        href={contributor.linkedin}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <LinkedinFilled
                          style={{ fontSize: '2rem' }}
                          title="LinkedIn"
                        />
                      </a>
                      {contributor.behance ? (
                        <a
                          href={contributor.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <BehanceSquareFilled
                            title="Behance"
                            style={{
                              fontSize: '2rem',
                            }}
                          />
                        </a>
                      ) : (
                        <a
                          href={contributor.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <GithubFilled
                            title="Github"
                            style={{ fontSize: '2rem' }}
                          />
                        </a>
                      )}
                      {contributor.hasPortfolio && (
                        <a
                          href={contributor.blog}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <TabletFilled
                            title="Portfolio"
                            style={{ fontSize: '2rem' }}
                          />
                        </a>
                      )}
                    </Space>
                  </Row>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Business;
