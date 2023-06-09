import { Delete, Edit } from '@mui/icons-material';
import {
  Box,
  IconButton,
  LinearProgress,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from '@mui/material';
import { Toolbar } from 'app/shared/components';
import { Enviroments } from 'app/shared/environments';
import { useDebounce } from 'app/shared/hooks';
import { IListPerson } from 'app/shared/interfaces';
import { PageBaseLayout } from 'app/shared/layouts';
import { PeopleService } from 'app/shared/services';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const PeopleListing = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { debounce } = useDebounce();
  const navigate = useNavigate();

  const [totalCount, setTotalCount] = useState(0);
  const [rows, setRows] = useState<IListPerson[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const search = useMemo(() => {
    return searchParams.get('search') || '';
  }, [searchParams]);

  const page = useMemo(() => {
    return Number(searchParams.get('page') || '1');
  }, [searchParams]);

  useEffect(() => {
    setIsLoading(true);

    debounce(() => {
      PeopleService.getAll(page, search).then((result) => {
        setIsLoading(false);

        if (result instanceof Error) {
          return alert(result.message);
        }

        console.log(result);

        setTotalCount(result.totalCount);
        setRows(result.data);
      });
    });
  }, [search, page]);

  const handleDelete = (id: number) => {
    if (window.confirm('Deseja realmente apagar?') === true) {
      PeopleService.deleteById(id).then((result) => {
        if (result instanceof Error) {
          return alert(result.message);
        }
        setRows((oldRows) => [...oldRows.filter((oldRow) => oldRow.id !== id)]);
        alert('Registro apagado com sucesso!');
      });
    }
  };

  return (
    <PageBaseLayout
      title="Listagem de pessoas"
      toolbar={
        <Toolbar
          showSearchInput
          newButtonText="Nova"
          searchText={search}
          WhenClickingOnNew={() => navigate('/pessoas/detalhe/nova')}
          whenChangingSearchText={(texto) =>
            setSearchParams({ search: texto, page: '1' }, { replace: true })
          }
        />
      }
    >
      <Box>
        <TableContainer
          component={Paper}
          variant="outlined"
          sx={{ m: 1, width: 'auto' }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nome completo</TableCell>
                <TableCell>Email</TableCell>
                <TableCell align="center">Idade</TableCell>
                <TableCell
                  width={180}
                  align="center"
                >
                  Ações
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.fullName}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell align="center">{row.age}</TableCell>
                  <TableCell
                    width={120}
                    align="center"
                  >
                    <IconButton
                      size="small"
                      onClick={() => navigate(`/pessoas/detalhe/${row.id}`)}
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => handleDelete(row.id)}
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            {totalCount === 0 && !isLoading && (
              <caption>{Enviroments.LISTING_EMPTY}</caption>
            )}
            <TableFooter>
              {isLoading && (
                <TableRow>
                  <TableCell colSpan={3}>
                    <LinearProgress variant="indeterminate" />
                  </TableCell>
                </TableRow>
              )}
              {totalCount > 0 && totalCount > 5 && (
                <TableRow>
                  <TableCell colSpan={3}>
                    <Pagination
                      page={page}
                      count={Math.ceil(totalCount / Enviroments.LINES_LIMIT)}
                      onChange={(e, newPage) =>
                        setSearchParams(
                          { search, page: newPage.toString() },
                          { replace: true }
                        )
                      }
                    />
                  </TableCell>
                </TableRow>
              )}
            </TableFooter>
          </Table>
        </TableContainer>
      </Box>
    </PageBaseLayout>
  );
};
