import * as React from 'react';
import * as Constants from './constants';
import { css } from '@emotion/css';
import { Layout, LayoutContext } from './LayoutContext';
import { useContext } from 'react';

// todo: do we need this at all
const windowListSectionStyle = (layout: Layout) =>
    css({
        borderBottom: '1px solid #bababa',
        paddingLeft: 12,
        paddingRight: 24,
        paddingTop: layout.sectionPaddingTop,
        paddingBottom: layout.sectionPaddingBottom,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        // flexWrap: 'wrap',
        // gap: "2em",

        // display: 'block',

        // justifyContent: 'stretch',
        // // border: '1px solid blue',
        // // flexDirection: 'column',
        // // flexDirection: 'row',
        // // alignItems: 'stretch',
        // // width: '100%',
        // // maxHeight: "800px",
        // // flexBasis: "100%",
        // // flexShrink: 0,
    });

const windowListSectionHeaderStyle = (layout: Layout) =>
    css({
        minWidth: Constants.WINDOW_MIN_WIDTH,
        maxWidth: Constants.WINDOW_MAX_WIDTH,
        fontWeight: 900,
        fontSize: layout.sectionHeaderFontSize,
        marginBottom: layout.sectionHeaderMarginBottom,
        background: 'blue'
    });

const windowListChildrenContainerStyle = css({
    marginLeft: 8,
    flexWrap: 'wrap',
    width: '100%',
    border: '3px solid red',
});

interface WindowListSectionProps {
    title?: string;
    focusedRef?: React.MutableRefObject<HTMLDivElement | null>;
    children: React.ReactNode;
}

interface SectionDivProps {
    className: string;
    ref?: React.MutableRefObject<HTMLDivElement | null>;
}

const WindowListSection: React.FC<WindowListSectionProps> = ({
    title,
    focusedRef,
    children,
}: WindowListSectionProps) => {
    const layout = useContext(LayoutContext);

    var header = null;
    if (title) {
        header = (
            <div className={windowListSectionHeaderStyle(layout)}>
                <span>{title}</span>
            </div>
        );
    }
    var sectionDivProps: SectionDivProps = {
        className: windowListSectionStyle(layout),
    };
    if (focusedRef) {
        sectionDivProps.ref = focusedRef;
    }
    return (
        <div {...sectionDivProps}
        style={{
            // background: "red"
        }}>
            {header}
            {children}
            {/* <div className={windowListChildrenContainerStyle}>{children}</div> */}
        </div>
    );
};

export default WindowListSection;
