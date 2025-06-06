import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    location: { name: string };
};

type CharacterTableProps = {
    readonly characters: readonly Character[];
    readonly currentPage: number;
    readonly totalPages: number;
    readonly onPageChange: (page: number) => void;
    readonly onRowClick: (id: number) => void;
};

export default function CharacterTable({
    characters,
    currentPage,
    totalPages,
    onPageChange,
    onRowClick,
}: CharacterTableProps) {
    return (
        <Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Species</TableCell>
                            <TableCell>Location</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {characters.map((char) => (
                            <TableRow
                                key={char.id}
                                hover
                                sx={{ cursor: "pointer" }}
                                onClick={() => onRowClick(char.id)}
                            >
                                <TableCell>{char.name}</TableCell>
                                <TableCell>{char.status}</TableCell>
                                <TableCell>{char.species}</TableCell>
                                <TableCell>{char.location?.name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Box display="flex" justifyContent="center" alignItems="center" mt={2} gap={2}>
                <Button
                    variant="outlined"
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </Button>
                <Typography>
                    Page {currentPage} of {totalPages}
                </Typography>
                <Button
                    variant="outlined"
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </Button>
            </Box>
        </Box>
    );
}
