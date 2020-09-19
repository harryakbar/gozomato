/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { GridList, GridListTile, makeStyles } from "@material-ui/core";
import { ReactChildren } from "react";

const style = css`
  width: 100%;
`;

type GridProps = {
  children: JSX.Element[] | JSX.Element | ReactChildren[];
};

const Grid = ({ children }: GridProps) => (
  <GridList cols={3} css={style} spacing={32} component="div">
    {children}
  </GridList>
);

export default Grid;

const useStyles = makeStyles({
  tile: {
    display: "flex",
    overflow: "visible",
    flex: 1,
  },
});

const gridItem = css`
  display: flex;
  min-height: 20rem;
`;

export const GridItem = ({ children }: GridProps) => (
  <GridListTile
    component="div"
    css={gridItem}
    classes={{ tile: useStyles().tile }}
  >
    {children}
  </GridListTile>
);
