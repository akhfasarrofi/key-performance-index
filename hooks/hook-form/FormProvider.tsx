import React from 'react';
import { FormProvider as Form } from 'react-hook-form';
import { FormProviderProps } from 'types/form';

const FormProvider = ({
  children,
  onSubmit,
  methods,
}: FormProviderProps) => {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
};

export default React.memo(FormProvider);
