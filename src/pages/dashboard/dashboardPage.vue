<template>
  <v-row>
    <v-col cols="12" md="12">
      <v-card title="Simple Title">
        <pre>{{ meStore.user }}</pre>
        Ta logado jovem? {{ meStore.isLoggedIn }}
      </v-card>
    </v-col>
  </v-row>
  <!-- <v-row>
    <v-col cols="12" md="12">
      <UiParentCard title="Simple Title">
        <pre>{{ meStore.user }}</pre>
        Ta logado jovem? {{ meStore.isLoggedIn }}
      </UiParentCard>
    </v-col>
  </v-row>
  <v-card flat class="boder mb-4">
    <div class="d-flex justify-between">
      <v-card-title>Ultimos Usuários</v-card-title>
      <v-card-title>
        <v-btn @click="isDialogOpen = true"> Open Dialog </v-btn>

        <v-dialog v-model="isDialogOpen" width="650px">
          <v-card title="Novo Usuário">
            <v-card-text>
              <v-row>
                <v-col>
                  <v-text-field label="Nome" variant="outlined"></v-text-field>
                </v-col>

                <v-col>
                  <v-text-field
                    label="E-mail"
                    variant="outlined"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-select
                label="Cargo"
                variant="outlined"
                :items="['Admin', 'Gerente', 'Convidado']"
              ></v-select>
            </v-card-text>

            <v-card-actions>
              <v-btn variant="tonal" @click="isDialogOpen = false"
                >Cancelar</v-btn
              >
              <v-btn variant="tonal" color="success">Salvar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card-title>
    </div>

    <v-table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Calories</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Nome</td>
          <td>444</td>
          <td>
            <v-btn variant="tonal" color="primary">Editar</v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card> -->
</template>

<script setup>
import { useMeStore } from "@/stores/me";
import { ref } from "vue";

const meStore = useMeStore();
const isDrawerOpen = ref(true);
const isDialogOpen = ref(false);
</script>
