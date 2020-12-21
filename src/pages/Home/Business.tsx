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
      name: 'Felipe Austríaco',
      image:
        'https://cdn.discordapp.com/attachments/421799034169196584/790324606653300766/pp.png',
      job: 'Software Engineer',
      linkedin: 'https://www.linkedin.com/in/felipe-austriaco-dev/',
      github: 'https://github.com/w1redl4in',
      blog: 'https://felipeaustriaco.dev',
    },
    {
      name: 'Vinicius Sousa',
      image:
        'https://cdn.discordapp.com/attachments/421799034169196584/790319338375872542/indice.png',
      job: 'Software Engineer',
      linkedin: 'https://www.linkedin.com/in/viniciussouza23/',
      github: 'https://github.com/ZeroBulletiss',
      blog: '',
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
    },
  ]);

  return (
    <Row justify="center" align="middle" style={{ padding: '0 3rem' }}>
      <Col span={12}>
        <Row justify="center">
          <img src={BusinessLogo} alt="" width="600px" />
        </Row>
      </Col>
      <Col span={12}>
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
                <Space>
                  <Avatar src={contributor.image} size={64} />
                  <Typography.Text strong>{contributor.name}</Typography.Text> -
                  <Typography.Text strong>{contributor.job}</Typography.Text> -
                  <a
                    href={contributor.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedinFilled style={{ fontSize: '2rem' }} />
                  </a>
                  {contributor.behance ? (
                    <a
                      href={contributor.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BehanceSquareFilled
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
                      <GithubFilled style={{ fontSize: '2rem' }} />
                    </a>
                  )}
                  <a href={contributor.blog} target="_blank" rel="noreferrer">
                    <TabletFilled style={{ fontSize: '2rem' }} />
                  </a>
                </Space>
              </Row>
            ))}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Business;
