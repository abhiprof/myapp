import { useNavigate, useSearch } from '@tanstack/react-router';
import { characterListRoute } from '../routes/CharacterListRoute';
import { useCharacters } from './hooks';
import CharacterTable from '../components/CharacterTable';
import {
    Box,
    Button,
    Typography,
    CircularProgress,
    Alert,
    Stack,
} from '@mui/material';

export default function CharacterList() {
    const navigate = useNavigate({ from: characterListRoute.id });
    const search = useSearch({ from: characterListRoute.id });

    const page = search.page;
    const { data, isLoading, isError, refetch } = useCharacters(page);

    const handlePageChange = (newPage: number) => {
        navigate({ search: (prev: { page: number }) => ({ ...prev, page: newPage }) });
    };

    const handleRowClick = (id: number) => {
        navigate({ to: `/character/${id}` });
    };

    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={4}>
                <Typography variant="h5" fontWeight={600}>
                    Character List
                </Typography>
                <Button variant="outlined" onClick={() => refetch()}>
                    Refresh
                </Button>
            </Stack>

            {isLoading && (
                <Box display="flex" justifyContent="center" my={4}>
                    <CircularProgress />
                </Box>
            )}
            {isError && (
                <Alert severity="error" sx={{ my: 2 }}>
                    Failed to load characters.
                </Alert>
            )}

            {data && (
                <CharacterTable
                    characters={data.results}
                    currentPage={page}
                    totalPages={data.info.pages}
                    onPageChange={handlePageChange}
                    onRowClick={handleRowClick}
                />
            )}
        </Box>
    );
}
