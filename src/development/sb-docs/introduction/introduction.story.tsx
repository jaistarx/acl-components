import { Meta } from '@storybook/react';
import React from 'react';
import { AclBox, AclCard } from '../../..';
import IntroductionStyles from './introduction.module.css';

export default {
  title: 'Docs/Introduction',
} as Meta;

export const Introduction: React.FC = () => (
  <div className={IntroductionStyles['intro-wrapper']}>
    <h1 className={IntroductionStyles['acl-header']}>ACL Storybook</h1>
    <h4>
      This Storybook has been tailored specifically for the Advantasure Component Library{'(ACL)'}, offering a
      comprehensive environment for exploring, testing, and refining its unique set of UI components.
    </h4>
    <div className={IntroductionStyles['acl-card-wrapper']}>
      <AclCard>
        <AclBox className={IntroductionStyles['aclcard-body']}>
          <h3 className={IntroductionStyles['question']}>What is Storybook?</h3>
          <div>
            Storybook is an open-source tool for developing UI components in isolation for React, Vue, and Angular. It
            provides a sandbox environment where developers can view and play around components independently from the
            rest of the application.
          </div>
        </AclBox>
      </AclCard>
      <AclCard>
        <AclBox className={IntroductionStyles['aclcard-body']}>
          <h3 className={IntroductionStyles['question']}>What is a Story?</h3>
          <div>
            When developing a component variation in isolation, save it as a story. Stories are a declarative syntax for
            supplying props and mock data to simulate component variations. Each component can have multiple stories.
            Each story allows you to demonstrate a specific variation of that component to verify appearance and
            behavior.
          </div>
        </AclBox>
      </AclCard>
      <AclCard>
        <AclBox className={IntroductionStyles['aclcard-body']}>
          <h3 className={IntroductionStyles['question']}>Library used: </h3>
          <div>
            <a href="https://mui.com/material-ui/" target="_blank" rel="noreferrer">
              Material UI
              {'(MUI)'}
            </a>
          </div>
        </AclBox>
      </AclCard>
      <AclCard>
        <AclBox className={IntroductionStyles['aclcard-body']}>
          <h3 className={IntroductionStyles['question']}>Packages Used: </h3>
          <div>
            @emotion/react: 11.14.0
            <br />
            @emotion/styled: 11.14.0
            <br />
            @mui/icons-material: 6.4.2
            <br />
            @mui/material: 6.4.2
            <br />
            @mui/x-date-pickers: 7.25.0
            <br />
            notistack: 3.0.2
            <br />
            react: 18.3.1
            <br />
            react-dom: 18.3.1
            <br />
            react-dropzone: 14.3.5
            <br />
            react-virtuoso: 4.12.3
          </div>
        </AclBox>
      </AclCard>
    </div>
  </div>
);
