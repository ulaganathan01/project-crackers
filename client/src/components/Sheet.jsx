import "../styles/Sheet.css";

export default function Sheet() {
    
    return (
        <div className="overflow-x-scroll">
            <table>
                <thead>
                    <tr>
                        {
                            [...Array(16)].map((headName, headIndex) => {
                                return (
                                    <th key={headIndex}>
                                        <input value={headName} className="bg-warning"/>
                                    </th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        [...Array(30)].map((_, rowIndex) => {
                            return (
                                <tr key={rowIndex}>
                                    {
                                        [...Array(16)].map((_, colIndex) => {
                                            return (
                                                <td key={colIndex}>
                                                    <input />
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}