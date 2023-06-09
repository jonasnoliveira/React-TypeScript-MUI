import {
  Box,
  Button,
  Grid,
  LinearProgress,
  Paper,
  Typography,
} from '@mui/material';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { DetailTools } from 'app/shared/components';
import { VTextField } from 'app/shared/forms';
import { IFormData } from 'app/shared/interfaces';
import { PageBaseLayout } from 'app/shared/layouts';
import { PeopleService } from 'app/shared/services';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const PeopleDetail = () => {
  const { id = 'nova' } = useParams<'id'>();
  const navigate = useNavigate();

  const formRef = useRef<FormHandles>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    if (id !== 'nova') {
      setIsLoading(true);

      PeopleService.getById(Number(id)).then((result) => {
        setIsLoading(false);

        if (result instanceof Error) {
          alert(result.message);
          navigate('/pessoas');
        } else {
          setName(result.fullName);
          console.log(result);

          formRef.current?.setData(result);
        }
      });
    }
  }, [id]);

  const handleDelete = (id: number) => {
    if (window.confirm('Deseja realmente apagar?') === true) {
      PeopleService.deleteById(id).then((result) => {
        setIsLoading(false);
        if (result instanceof Error) {
          alert(result.message);
        } else {
          alert('Registro apagado com sucesso!');
          navigate('/pessoas');
        }
      });
    }
  };

  const handleSave = (data: IFormData) => {
    if (id === 'nova') {
      PeopleService.create(data).then((result) => {
        setIsLoading(false);

        if (result instanceof Error) {
          return alert(result.message);
        }
        alert('Registro criado com sucesso!');
        navigate(`/pessoas/detalhe/${result}`);
      });
    } else {
      PeopleService.updateById(Number(id), { id: Number(id), ...data }).then(
        (result) => {
          setIsLoading(false);

          if (result instanceof Error) {
            return alert(result.message);
          }
        }
      );
    }

    console.log(data);
  };

  return (
    <PageBaseLayout
      title={id === 'nova' ? 'Nova pessoa!' : `Detalhe de ${name}`}
      toolbar={
        <DetailTools
          newButtonText="Nova"
          showSaveButton
          showSaveAndCloseButton
          showNewButton={id !== 'nova'}
          showDeleteButton={id !== 'nova'}
          whenClickingBack={() => navigate('/pessoas')}
          whenClickingSave={() => formRef.current?.submitForm()}
          whenClickingOnNew={() => navigate('/pessoas/detalhe/nova')}
          whenClickingDelete={() => handleDelete(Number(id))}
          clickingOnSaveAndClose={() => formRef.current?.submitForm()}
        />
      }
    >
      {isLoading && <LinearProgress variant="indeterminate" />}

      <Form
        ref={formRef}
        onSubmit={handleSave}
      >
        <Box
          margin={1}
          display="flex"
          flexDirection="column"
          component={Paper}
          variant="outlined"
        >
          <Grid
            container
            direction="column"
            padding={2}
            spacing={2}
          >
            {isLoading && (
              <Grid item>
                <LinearProgress variant="indeterminate" />
              </Grid>
            )}

            <Grid item>
              <Typography variant="h6">Geral</Typography>
            </Grid>

            <Grid
              container
              item
              direction="row"
              spacing={2}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                xl={2}
              >
                <VTextField
                  fullWidth
                  label="Nome completo"
                  name="fullName"
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid
              container
              item
              direction="row"
              spacing={2}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                xl={2}
              >
                <VTextField
                  fullWidth
                  label="Email"
                  name="email"
                />
              </Grid>
            </Grid>
            <Grid
              container
              item
              direction="row"
              spacing={2}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                xl={2}
              >
                <VTextField
                  fullWidth
                  label="Cidade"
                  name="cityId"
                />
              </Grid>
            </Grid>
            <Grid
              container
              item
              direction="row"
              spacing={2}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                xl={2}
              >
                <VTextField
                  fullWidth
                  label="Idade"
                  name="age"
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Form>
    </PageBaseLayout>
  );
};
