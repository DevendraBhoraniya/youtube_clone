import React, { useState } from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/Constants";

const Categories = ({ selectedCategory, setSelectedCategory }) => {

    return (
        <Stack
            direction="row"
            sx={{
                overflowY: "auto",
                overflowX: "auto",
                height: { sx: "auto", md: "92%" },
                flexDirection: { md: "column" },
            }}
        >
            {categories.map((category) => (
                <button
                    className="category-btn"
                    style={{
                        background: category.name === selectedCategory && "rgba(255,255,255,0.15)",
                        color: "white",
                    }}
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                >
                    <span style={{ color: category.name === selectedCategory ? "white" : "rgba(255,255,255,0.50)", marginRight: "15px" }}>
                        {category.icon}
                    </span>
                    <span style={{ opacity: category.name === selectedCategory ? "1" : "0.7" }}>
                        {category.name}
                    </span>
                </button>
            ))}
        </Stack>
    );
};

export default Categories;
