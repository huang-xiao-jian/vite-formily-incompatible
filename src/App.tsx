import { Field, FormProvider } from "@formily/react";
import { FormItem, Select } from "@formily/antd";
import { createForm } from "@formily/core";

function App() {
  const form = createForm();

  return (
    <FormProvider form={form}>
      <Field name="bug" decorator={[FormItem]} component={[Select]} />
    </FormProvider>
  );
}

export default App;
