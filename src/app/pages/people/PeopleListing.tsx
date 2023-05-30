import {
  Box,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  fabClasses,
} from '@mui/material';
import { Toolbar } from 'app/shared/components';
import { Enviroment } from 'app/shared/environments';
import { useDebounce } from 'app/shared/hooks';
import { IListPerson } from 'app/shared/interfaces';
import { PageBaseLayout } from 'app/shared/layouts';
import { PeopleService } from 'app/shared/services';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const PeopleListing = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { debounce } = useDebounce();

  const [totalCount, setTotalCount] = useState(0);
  const [rows, setRows] = useState<IListPerson[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const search = useMemo(() => {
    return searchParams?.get('search') || '';
  }, [searchParams]);

  useEffect(() => {
    setIsLoading(true);

    debounce(() => {
      PeopleService.getAll(1, search).then((result) => {
        setIsLoading(false);

        if (result instanceof Error) {
          return alert(result.message);
        }

        console.log(result);

        setTotalCount(result.totalCount);
        setRows(result.data);
      });
    });
  }, [search]);

  return (
    <PageBaseLayout
      title="Listagem de pessoas"
      toolbar={
        <Toolbar
          showSearchInput
          newButtonText="Nova"
          searchText={search}
          whenChangingSearchText={(texto) =>
            setSearchParams({ search: texto }, { replace: true })
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
                <TableCell>Ações</TableCell>
                <TableCell>Nome completo</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>Ações</TableCell>
                  <TableCell>{row.fullName}</TableCell>
                  <TableCell>{row.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            {totalCount === 0 && !isLoading && (
              <caption>{Enviroment.LISTING_EMPTY}</caption>
            )}
            <TableFooter>
              {isLoading && (
                <TableRow>
                  <TableCell colSpan={3}>
                    <LinearProgress variant="indeterminate" />
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
