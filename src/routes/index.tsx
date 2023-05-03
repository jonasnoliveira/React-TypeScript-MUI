import { Navigate, Route, Routes } from "react-router-dom"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/pagina-inicial" element={<p>Rotas</p>} />

            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
        </Routes>
    )
}