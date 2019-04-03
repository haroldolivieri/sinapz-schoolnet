import React from 'react'
import { AddFloatingButton } from '../containers/AddFloatingButton'

export const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <p>Not implemented yet</p>
    <AddFloatingButton
      popupItems={[
        {
          text: 'Adicionar Evento',
          action: function() {
            console.log('adicionar evento')
          }
        },
        {
          text: 'Adicionar Filial',
          action: function() {
            console.log('adicionar filial')
          }
        },
        {
          text: 'Adicionar Professor',
          action: function() {
            console.log('adicionar professor')
          }
        },
        {
          text: 'Adicionar Variável de Prova',
          action: function() {
            console.log('adicionar variável de prova')
          }
        },
        {
          text: 'Adicionar Matéria',
          action: function() {
            console.log('adicionar matéria')
          }
        },
        {
          text: 'Adicionar Segmento',
          action: function() {
            console.log('adicionar segmento')
          }
        }
      ]}
    />
  </div>
)

export const Agenda = () => (
  <div>
    <h1>Agenda</h1>
    <p>Not implemented yet</p>

    <AddFloatingButton
      popupItems={[
        {
          text: 'Add new',
          action: function() {
            console.log('lalalal')
          }
        }
      ]}
    />
  </div>
)

export const Teachers = () => (
  <div>
    <h1>Professores</h1>
    <p>Not implemented yet</p>
  </div>
)

export const Variables = () => (
  <div>
    <h1>Variáveis da prova</h1>
    <p>Not implemented yet</p>
  </div>
)

export const Subjects = () => (
  <div>
    <h1>Matérias</h1>
    <p>Not implemented yet</p>
  </div>
)

export const Segments = () => (
  <div>
    <h1>Segmentos</h1>
    <p>Not implemented yet</p>
  </div>
)

export const Help = () => (
  <div>
    <h1>Ajuda</h1>
    <p>Not implemented yet</p>
  </div>
)
