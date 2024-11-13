// components/LeagueTable.js
"use client";

import React from "react";
import { useTable } from "react-table";

const LeagueTable = ({ columns, data }) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({
            columns,
            data,
        });

    return (
        <div className="overflow-x-auto bg-gray-900 min-w-max flex justify-center items-center">
            <table
                {...getTableProps()}
                className="w-1/2 bg-gray-800 overflow-hidden rounded-3xl shadow-lg text-white border-none"
            >
                <thead className="bg-blue-900">
                    {headerGroups.map((headerGroup, index) => (
                        <tr
                            {...headerGroup.getHeaderGroupProps()}
                            key={headerGroup.id || index}
                        >
                            {headerGroup.headers.map((column, colIndex) => (
                                <th
                                    {...column.getHeaderProps()}
                                    key={column.id || colIndex}
                                    className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider border-none whitespace-nowrap"
                                >
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody
                    {...getTableBodyProps()}
                    className="bg-gray-800 divide-y divide-gray-700 rounded-b-3xl"
                >
                    {rows.map((row, rowIndex) => {
                        prepareRow(row);
                        return (
                            <tr
                                {...row.getRowProps()}
                                key={row.id || rowIndex}
                                className={`hover:bg-gray-700 ${
                                    rowIndex === rows.length - 1
                                        ? "rounded-b-3xl"
                                        : ""
                                }`}
                            >
                                {row.cells.map((cell, cellIndex) => (
                                    <td
                                        {...cell.getCellProps()}
                                        key={cell.column.id || cellIndex}
                                        className="px-6 py-4 text-sm text-gray-200 border-none whitespace-nowrap"
                                    >
                                        {cell.render("Cell")}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default LeagueTable;
