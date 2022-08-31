import { Card, CardContent, Grid } from '@mui/material';
import { Form, Formik } from 'formik';
import { MultipleUploadField } from './multipleFileUpField';

export default function Upload() {
  return (
    <Card>
      <CardContent>
        <Formik initialValues={{}} onSubmit={() => {}}>
          {({ values, errors }) => {
            <Form>
              <Grid container spacing={2} direction="column">
                <MultipleUploadField />
              </Grid>

              <pre>{JSON.stringify({ values, errors })}</pre>
            </Form>;
          }}
        </Formik>
      </CardContent>
    </Card>
  );
}
