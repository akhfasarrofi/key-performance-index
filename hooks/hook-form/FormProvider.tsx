import { FormProvider as Form } from 'react-hook-form';
import { FormProviderProps } from 'types/form';

export default function FormProvider({
  children,
  onSubmit,
  methods,
}: FormProviderProps) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
}
