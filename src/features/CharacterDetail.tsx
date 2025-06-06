import { useParams } from '@tanstack/react-router';
import { characterDetailRoute } from '../routes/CharacterDetailRoute';
import { useCharacterDetail } from './hooks';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    List,
    ListItem,
    ListItemText,
    CircularProgress,
    Box,
    Alert,
} from '@mui/material';

export default function CharacterDetail() {
    const { id } = useParams({ from: characterDetailRoute.id });
    const numericId = Number(id); 
    const { data, isLoading, isError } = useCharacterDetail(numericId);

    if (isLoading)
        return (
            <Box display="flex" justifyContent="center" mt={4}>
                <CircularProgress />
            </Box>
        );
    if (isError || !data)
        return (
            <Box display="flex" justifyContent="center" mt={4}>
                <Alert severity="error">Failed to load character details.</Alert>
            </Box>
        );

    return (
        <Card sx={{ maxWidth: 400, mx: 'auto', mt: 4, boxShadow: 3 }}>
            <CardMedia
                component="img"
                height="300"
                image={data.image}
                alt={data.name}
                sx={{ objectFit: 'cover' }}
            />
            <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                    {data.name}
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemText primary="Status" secondary={data.status} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Species" secondary={data.species} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Gender" secondary={data.gender} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Origin" secondary={data.origin.name} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Location" secondary={data.location.name} />
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    );
}
