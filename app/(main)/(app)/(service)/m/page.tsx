'use client'
import { useCallback, useState } from 'react'
import { ReactFlow, addEdge, applyEdgeChanges, applyNodeChanges } from '@xyflow/react'
import '@xyflow/react/dist/style.css'

const initialNodes = [
  { id: 'n1', position: { x: 0, y: 0 }, data: { label: 'Node 1' } },
  { id: 'n2', position: { x: 0, y: 100 }, data: { label: 'Node 2' } },
]
const initialEdges = [{ id: 'n1-n2', source: 'n1', target: 'n2' }]

export default function M() {
  const [nodes, setNodes] = useState(initialNodes)
  const [edges, setEdges] = useState(initialEdges)

  const onNodesChange = useCallback(
    changes => setNodes(nodesSnapshot => applyNodeChanges(changes, nodesSnapshot)),
    [],
  )
  const onEdgesChange = useCallback(
    changes => setEdges(edgesSnapshot => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  )
  const onConnect = useCallback(
    params => setEdges(edgesSnapshot => addEdge(params, edgesSnapshot)),
    [],
  )

  return (
    <div style={{ width: '100%', height: '100%' }} className="bg-gray-100">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      />
    </div>
  )
}
