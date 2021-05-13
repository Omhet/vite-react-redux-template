---
to: src/pages/<%= h.changeCase.pascal(name) %>Page/<%= h.changeCase.pascal(name) %>Page.tsx
---
import React, { FunctionComponent } from 'react';
import classes from './<%= h.changeCase.pascal(name) %>Page.module.scss';

export interface <%= h.changeCase.pascal(name) %>PageProps {}

export const <%= h.changeCase.pascal(name) %>Page: FunctionComponent = () => {
  return (
    <div className={classes.main}>
    </div>
  );
};
