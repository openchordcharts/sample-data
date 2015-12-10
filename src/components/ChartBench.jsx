import Chart from "../containers/Chart"
import KeySelect from "./KeySelect"


const getGitHubBlobUrl = (slug) => `https://github.com/openchordcharts/sample-data/blob/master/data/charts/${slug}.json`


const ChartBench = ({
  chart,
  chromaticKey,
  commitChart,
  editChart,
  edited,
  selectChordKey,
  redo,
  redoDisabled,
  selectedChord = null,
  undo,
  undoDisabled,
  width,
}) => (
  <article>
    <h1 id={chart.slug}>
      {chart.title}
      {" "}
      <small>
        <a href={"#" + chart.slug} style={{textDecoration: "none"}} title="Anchor"></a>
        {" "}
        <a href={getGitHubBlobUrl(chart.slug)} style={{textDecoration: "none"}} target="_blank" title="View JSON file">
          
        </a>
      </small>
    </h1>
    <p>
      {
        edited ? (
          <span>
            <button onClick={() => { commitChart(chart.slug) }}>Commit</button>
            {" "}
            <button disabled={undoDisabled} onClick={undo}>Undo</button>
            <button disabled={redoDisabled} onClick={redo}>Redo</button>
            {" "}
            {
              Object.keys(selectedChord).length ? (
                <KeySelect
                  onChange={
                    (value) => {
                      selectChordKey(chart.slug, selectedChord.partName, selectedChord.index, value)
                    }
                  }
                  value={Object.keys(selectedChord).length ? selectedChord.key : null}
                />
              ) :
              "no chord selected"
            }
          </span>
        ) : (
          <button onClick={() => { editChart(chart.slug) }}>Edit</button>
        )
      }
    </p>
    <Chart {...{chromaticKey, edited, width}} slug={chart.slug} />
  </article>
)


export default ChartBench
