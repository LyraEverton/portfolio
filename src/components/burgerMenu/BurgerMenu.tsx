import React, {memo} from "react";
import {animated, config, useSprings} from "@react-spring/web";
import "./BurgerMenu.scss";

export const BurgerMenu = memo(({isOpen, onClick}: any) => {
    const linearConfig = {
        duration: 100
    };
    const topRect = async (next: any, isOpen: any) => {
        // Stage 1
        await next({
            transform: isOpen
                ? "translate(0px, 9px) rotate(0deg)"
                : "translate(0px, 9px) rotate(0deg)",
            config: linearConfig
        });

        // Stage 2
        await next({
            transform: isOpen
                ? "translate(0px, 9px) rotate(-45deg)"
                : "translate(0px, 0px) rotate(0deg)",
            config: config.wobbly
        });
    };

    const mediumRect = async (next: any, isOpen: any) => {
        // Medium rect has only Stage 1
        await next({
            to: {
                opacity: isOpen ? 0 : 1
            },
            // Make delay when isOpen changed from true to false
            delay: !isOpen && 100,
            config: linearConfig
        });
    };

    const bottomRect = async (next: any, isOpen: any) => {
        // Stage 1
        await next({
            transform: isOpen
                ? "translate(0px, -9px) rotate(0deg)"
                : "translate(0px, -9px) rotate(0deg)",
            config: linearConfig
        });

        // Stage 2
        await next({
            transform: isOpen
                ? "translate(0px, -9px) rotate(-135deg)"
                : "translate(0px, 0px) rotate(0deg)",
            config: config.wobbly
        });
    };

    const rects = [topRect, mediumRect, bottomRect];

    const [springs] = useSprings(
        3,
        (index) => ({
            to: async (next) => {
                await rects[index](next, isOpen);
            }
        }),
        [isOpen]
    );

    return (
        <button onClick={onClick} className={"menu-btn d-lg-none"}>
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="burgerIcon"
            >
                {springs.map((props, index) => {
                    return (
                        <animated.rect
                            key={index}
                            y={index * 9}
                            width="24"
                            height="2"
                            rx="1"
                            fill={"#000000"}
                            style={props}
                        />
                    );
                })}
            </svg>
        </button>
    );
});