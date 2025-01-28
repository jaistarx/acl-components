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
      <AclCard raised>
        <AclBox className={IntroductionStyles['aclcard-AclBox']}>
          <h3 className={IntroductionStyles['question']}>What is Storybook?</h3>
          <div>
            Storybook is an open-source tool for developing UI components in isolation for React, Vue, and Angular. It
            provides a sandbox environment where developers can view and play around components independently from the
            rest of the application.
          </div>
        </AclBox>
      </AclCard>
      <AclCard raised>
        <AclBox className={IntroductionStyles['aclcard-AclBox']}>
          <h3 className={IntroductionStyles['question']}>What is a Story?</h3>
          <div>
            When developing a component variation in isolation, save it as a story. Stories are a declarative syntax for
            supplying props and mock data to simulate component variations. Each component can have multiple stories.
            Each story allows you to demonstrate a specific variation of that component to verify appearance and
            behavior.
          </div>
        </AclBox>
      </AclCard>
      <AclCard raised>
        <AclBox className={IntroductionStyles['aclcard-AclBox']}>
          <h3 className={IntroductionStyles['question']}>Library used: </h3>
          <div>
            <a href="https://mui.com/material-ui/" target="_blank" rel="noreferrer">
              Material UI
              {'(MUI)'}
            </a>
          </div>
        </AclBox>
      </AclCard>
      <AclCard raised>
        <AclBox className={IntroductionStyles['aclcard-AclBox']}>
          <h3 className={IntroductionStyles['question']}>Prerequisite Packages: </h3>
          <div>
            @emotion/react : ^11.11.1<br></br>@emotion/styled : ^11.11.0
            <br></br>
            @mui/material : ^5.15.0<br></br>@mui/x-date-pickers : ^6.18.6
            <br></br>
            date-fns : ^2.30.0<br></br>react-dropzone : ^14.2.3
          </div>
        </AclBox>
      </AclCard>
    </div>
  </div>
);
